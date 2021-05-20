import Image from 'next/image'

function StoryCard({ name, src, profile }) {
    return (
        <div className="">
            <Image
                src={profile}
                className="absolute opacity-0 lg:opacity-100 rounded-full
                z-50 top-10"
                width={40}
                height={40}
                layout='fixed'
                objectFit='cover'
            />
                  <Image
                src={src}
                className="object-cover filter brightness-75 rounded-full lg:rounded-3xl
                z-50 top-10"
                width={40}
                height={40}
                layout='fixed'
                objectFit='cover'
            />
            {name}
        </div>
    )
}

export default StoryCard
