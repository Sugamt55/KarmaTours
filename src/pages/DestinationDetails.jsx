import Card1 from "../components/Card1";

function DestinationDetail() {
    
    const dataComp = Data.map((item) =>
        <div>
            {
                <div className="p-6">
                    <p id={item.section} className="text-3xl font-bold flex py-6 text-slate-700">{item.section}</p>
                    <div className='flex justify-center flex-wrap gap-6'>
                        {
                            item.detail.map((data) =>
                                <Card1 image={data.image} name={data.name} />
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

export default DestinationDetail;