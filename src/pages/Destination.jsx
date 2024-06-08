
import Card from '../components/Card';
import React from 'react';
import Data from '../components/Data';


export default function Product(props) {
    const dataComp = Data.map((item) =>
        <div>
            {
                <div className="p-6">
                    <p id={item.section} className="text-3xl font-bold flex py-6 text-blue-950">{item.section}</p>
                    <div className='flex justify-center flex-wrap gap-6'>
                        {
                            item.detail.map((data) =>
                                <Card image={data.image} title={data.title} para={data.para} />
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
    )
}