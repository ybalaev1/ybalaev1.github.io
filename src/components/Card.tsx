import React from "react";
import { project } from "../App";
import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';

import getBgColor from "../utils/helpers";

const Card = (data: project) => {

    const smallDescription = data.description.length > 150 ? `${data.description.slice(0, 150)} ...` : data.description
    const smallDescriptionMobile = data.description.length > 100 ? `${data.description.slice(0, 200)} ...` : data.description
    const itemTemplate = (item:{url: string}) => {
         return (
              <Image height='350' src={item.url} className='h-25 p-4 rounded-pill my-5 bg-body mx-2 shadow-lg' />
         )
    }

    const styleLeft = {
        maxWidth: '70dvw',
        background: `linear-gradient(110deg, ${data.borderColor} 20%, rgb(58, 58, 58) 95%`
    }
    const styleRight = {
        maxWidth: '70dvw',
        background: `linear-gradient(110deg, rgb(58, 58, 58) 20%, ${data.borderColor} 95%`

    }

    return (
        <>
        <div className="my-5 rounded-3 d-none d-xl-flex"
         style={data.position === 'left' ? styleLeft : styleRight}
         >
            <Galleria value={data.images} numVisible={data.images.length} circular
                showThumbnails={false} showIndicators={data.images.length > 1} item={itemTemplate} changeItemOnIndicatorHover />
                <div className="grid mb-4">
                    <p className='p-5 pt-4 h2 ms-3 text-white mt-4'>{data.name}</p>
                    <p className='p-5 py-0 h4 ms-3 text-white mb-4 lh-2 text-wrap me-5 card-description'>{smallDescription}
                    <Button label="More info" outlined link className="btn text-white"/>
                    </p>
                    <div className="mx-5">
                        {data.stack.map((item: any) => {
                            return (
                                <Tag style={{ backgroundColor: `${getBgColor(item.key)}`}} className="p-2 px-3 ms-3 rounded-3 mt-2 text-black" value={item?.name} severity={'success'}></Tag>
                            )
                        })}
                    </div>
                    <div className="d-flex mx-5 my-3 mt-5 flex align-self-end" style={{ justifyContent: 'flex-end'}}>
                        {data.buttons?.map((item: any) => {
                            return (
                                <Button severity="secondary" className="text-white me-4 rounded-5">
                                    <a target="_blank" href={item.link} className="text-white text-decoration-none" rel="noreferrer">{item.title}</a>
                                </Button>
                                // <Tag style={{ backgroundColor: `${getBgColor(item.key)}`}} className="p-2 ms-3 rounded-3 mt-2" value={item?.name} severity={'success'}></Tag>
                            )
                        })}
                    </div>
                </div>
        </div>
        <div className="d-lg-none d-xl-none d-xxl-none d-grid m-3 rounded-4 align-items-center" style={{background: `linear-gradient(110deg, ${data.borderColor} 20%, rgb(58, 58, 58) 95%`}}>
            <p className='p-5 pt-4 fs-1 fw-bold text-white text-center'>{data.name}</p>
            <p className='p-5 fs-5 text-white mb-1 lh-2 text-wrap text-center'>{smallDescriptionMobile}</p>
            <div className="d-flex my-3 mt-5" style={{ justifyContent: 'center'}}>
                        {data.buttons?.map((item: any) => {
                            return (
                                <Button severity="secondary" className="text-white mx-2 rounded-5">
                                    <a target="_blank" href={item.link} className="text-white text-decoration-none px-2" rel="noreferrer">{item.title}</a>
                                </Button>
                                // <Tag style={{ backgroundColor: `${getBgColor(item.key)}`}} className="p-2 ms-3 rounded-3 mt-2" value={item?.name} severity={'success'}></Tag>
                            )
                        })}
                    </div>
        </div>
        </>
    )
};
export default Card;