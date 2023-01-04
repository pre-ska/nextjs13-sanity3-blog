import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { RichTextComponents } from '../../../../components/RichTextComponents';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';

type Props = {
  params: {
    slug: string;
  };
};

/**
 * ! ovaj block koda kontrolira dali će biti static page
 * ! ili će biti refreshana/rebuildana svakih 60 sec samo ako je stranica aktivna
 *
 * ! - bez revalidate konstante (ali sa generateStaticParams) je obična static site generated stranica
 *
 * ! - bez generateStaticParams je server side rendered (na svaki zahtjev)
 */
export const revalidate = 60; // revalidate this page every 60 seconds

export async function generateStaticParams() {
  const query = groq`
		*[_type == "post"]
		{
			slug
		}
		`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

/******************************************************** */
/********************* KRAJ BLOKA *********************** */
/******************************************************** */

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0] {
            ...,
            author->,
            categories[]->
        }
    `;
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className='px-10 pb-28'>
      <section className='space-y-2 border border-[#f7ab0a] text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className='p-5 bg-[#f7ab0a] w-full'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='text-xl font-extrabold'>{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className='flex items-center space-x-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />

                <div className='w-64'>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <div>{/* Todo Author Bio */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className='italic pt-10'>{post.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
};

export default Post;
