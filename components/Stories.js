import StoryCard from './StoryCard'

const stories = [
    {
        name: "Milan Adhikari",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/14v"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "Ashosd Adhikari",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/14v"
    },
    {
        name: "Rajesh Adhikari",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/14v"
    },
]
function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
          
            {stories.map((index) => (
                <StoryCard
                    key={index.src}
                    name={index.name}
                    src={index.src}
                    profile={index.profile} />

            ))}


        </div>
    )
}

export default Stories
