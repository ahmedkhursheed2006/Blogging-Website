import React from 'react'
import PostAuthor from "/src/pages/Personal Blog/Dummy Data/PostAuthor.jsx"
import { Link } from 'react-router'
import Thumbnail from "/src/pages/Personal Blog/Dummy Data/Thumbnail.jpeg"
function PostDetail() {
    return (
        <section className='bg-amber-100'>
            <div className='bg-white w-[80%] flex flex-col items-center m-auto px-10 py-5'>
                <div className='flex w-full justify-between'>
                    <PostAuthor />
                    <div className='flex gap-3'>
                        <Link to="/posts/user/edit"><span className='flex items-center bg-green-600 rounded-[3px] px-5 py-1 text-white'>Edit</span></Link>
                        <Link to={`/posts/user/delete`}><span className='flex items-center bg-red-600 rounded-[3px] px-5 py-1 text-white'>Delete</span></Link>
                    </div>
                </div>
                <div>
                    <h1 className='uppercase font-bold text-[3rem]'>Title</h1>
                </div>
                <div className='w-full my-5' >
                    <img className='object-cover w-full aspect-video' src={Thumbnail} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ut tempore veniam dolorum nihil sapiente laudantium reiciendis ipsa maxime sequi vitae, quisquam necessitatibus eum aut repellendus natus inventore possimus error. Reiciendis a perferendis vitae sed optio autem, omnis iste laborum exercitationem mollitia non eos dolore ducimus maiores molestias iure at nemo id quis repudiandae quos!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo quod fuga dolorum alias vel ratione quia suscipit illum quae necessitatibus commodi harum est, odit laborum possimus tenetur consequatur pariatur eligendi? Placeat quia corrupti a quam? Aliquam hic dolorem beatae vitae eligendi minus nulla. Numquam, magnam sequi repellendus totam sapiente veritatis deserunt pariatur error, temporibus quam aliquid facilis neque maxime.</p>
                    <p>Odio qui voluptate corrupti magnam soluta ullam architecto alias culpa sapiente, possimus in ut corporis nisi accusamus, tempora veniam at, natus delectus doloribus. Hic voluptatum consequatur facere delectus recusandae pariatur ea corporis, quas, consequuntur asperiores inventore enim tenetur, voluptate similique doloremque. Dolorum odio veritatis maxime, voluptatibus explicabo sed ipsum autem saepe. Doloribus minus velit dignissimos itaque est esse iure ex!</p>
                    <p>Accusantium, natus explicabo. Blanditiis doloremque quod eius exercitationem molestias magni unde ea sit perferendis in vero natus debitis, quibusdam illo atque harum voluptates incidunt autem at repellendus amet. Earum, vero rem nemo illum quia, perspiciatis consequuntur, repudiandae maxime perferendis ea tempore. Impedit nostrum laudantium earum debitis unde. Ab officia, consequuntur ducimus excepturi ratione voluptatum molestiae at? Reiciendis veniam voluptas necessitatibus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt expedita perspiciatis inventore consectetur similique quidem dolore aut veritatis tempore fugiat. Earum harum voluptates aspernatur quia voluptate. Deleniti consequatur sunt optio doloremque ex ea commodi reiciendis cum nobis et voluptas unde hic similique accusantium dicta magnam perferendis, tenetur, voluptatibus harum accusamus ipsum alias molestias numquam ut? Delectus ad, vitae magni doloribus atque deserunt quam, ipsa qui obcaecati blanditiis id nesciunt voluptatum natus et minima, quia quod? Iure excepturi deleniti accusamus quo velit corporis ut eius distinctio ex eum amet repellendus maxime, maiores quam dolorem minima assumenda eveniet earum dolores quibusdam. Ab aperiam, neque accusantium, architecto quia tempora dolor debitis sit dolore voluptatum omnis, quaerat ducimus eum. Reiciendis eaque minima ratione consectetur omnis saepe nihil possimus magnam placeat est labore porro incidunt adipisci blanditiis, distinctio ex a ab? Aliquid, quis eveniet! Architecto quae provident aut? Quas sequi ipsam alias quasi nisi unde voluptatum dignissimos odit provident suscipit.</p>
                    <p>Omnis quia quae ex natus voluptate molestias ducimus quo libero tempore earum, velit minima nemo, nobis officia repellat eius, ea doloribus non in temporibus maxime tempora! Earum et consequatur quae porro quam nemo voluptas, fuga neque eveniet tempore esse corporis, magnam, voluptatem eos vero enim maxime. Dolore optio, exercitationem tempore quo iste nulla dicta necessitatibus assumenda odio accusamus quas doloribus laborum id voluptates adipisci esse perspiciatis ad fuga doloremque. Provident rerum rem id voluptate ut natus quam quod similique, sit eaque hic cum quidem quis suscipit debitis eos animi nisi aspernatur ex facilis dolorem incidunt? Nostrum dignissimos veniam nihil ipsa rerum dolorem necessitatibus tenetur fugit ipsam quaerat voluptates itaque facilis voluptatibus vitae quasi doloribus eum aperiam odio vel, error, molestias exercitationem iste? Deleniti, quidem accusamus? Dolore repellat quas, inventore laudantium sequi illum quidem rem explicabo mollitia, autem ratione! Neque asperiores, totam suscipit fuga minima ab? Libero eius accusantium ullam delectus sapiente sint animi. Et, repellendus.</p>
                    <p>Magni molestias excepturi sit ducimus illum delectus laboriosam sint voluptatem consectetur. Corrupti, ipsa necessitatibus labore harum enim unde fuga, aliquam et molestiae veniam dicta blanditiis vitae. Non ullam eaque nemo nulla temporibus nobis eveniet? Mollitia similique, voluptatum magnam iste porro quas explicabo quis quibusdam? Porro, beatae distinctio vel voluptates deserunt, facilis delectus nisi libero consequuntur ipsum incidunt iusto animi. Esse a sed vel eius perspiciatis magnam quibusdam, placeat consequatur dolores, omnis corrupti quisquam debitis velit sint, at alias itaque enim aliquid. Corrupti, nesciunt laborum rerum, sapiente fugit cupiditate quas aliquid provident ut, suscipit fugiat? Adipisci eaque suscipit in reiciendis provident quasi itaque cupiditate magnam modi voluptas architecto iure, quos quibusdam veritatis minima aspernatur temporibus dolores placeat. Minima rem quibusdam deleniti recusandae expedita aliquid totam temporibus, aut quas quaerat quo cumque, sunt labore aliquam? Consectetur tempora ratione laboriosam iusto doloremque a molestias non! Recusandae, dolores! Odio aperiam itaque perspiciatis! Tempore voluptate corrupti nobis libero, aliquam illo!</p>
                </div>
            </div>


        </section>
    )
}

export default PostDetail
