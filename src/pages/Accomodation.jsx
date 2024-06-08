import Card1 from "../components/Card1";
import Data1 from "../components/Data1";

function Accomodation() {

    const dataComp = Data1.map((item) =>
        <div>
            {
                <div className="p-6">
                    <p id={item.section} className="text-3xl font-bold flex py-6 text-blue-950">{item.section}</p>
                    <div className='flex justify-center flex-wrap gap-6'>
                        {
                            item.detail.map((data) =>
                                <Card1 image={data.image} title={data.title} para={data.para} hashtag1={data.hashtag1} hashtag2={data.hashtag2} hashtag3={data.hashtag3}/>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )

    return (
        <section>
            {dataComp}
        </section>

    );
}

export default Accomodation;
