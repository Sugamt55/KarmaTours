export default function About() {
    return (
        <div className="flex md:flex-col-reverse">
            <div className='py-6'>
                <img
                    src='./Images/td1.jpeg'
                    className="w-full h-auto pt-24 md:pt-6"
                    alt="Thimpu"
                />
            </div>

            <div>
                <h1 className="font-extrabold text-3xl py-6 text-slate-800">About Us</h1>
                <p> <p className="text-xl font-light text-left pl-10">
                    Welcome to our Tourism website, your go-to digital platform for all your travel needs. Our mission is to provide a seamless and enriching experience from planning your trip to exploring your destination. With a user-friendly interface, we offer comprehensive information on travel destinations, accommodations, local attractions, and activities.
                    <br />
                    We prioritize user engagement through features like reviews, ratings, and personalized recommendations, ensuring authentic insights and tailor-made suggestions. Our platform includes various travel guides, tips, and itineraries to help you create personalized adventures, whether you're seeking a beach getaway, a mountain trek, or a cultural immersion.
                    <br />
                    More than just a planning tool, we aim to build a vibrant online community of travelers. By sharing stories and experiences, we inspire and empower travelers worldwide to embark on their dream journeys. Join us and discover the world like never before, with our comprehensive and intuitive travel website as your guide.
                </p></p>
            </div>
        </div>
    )
}