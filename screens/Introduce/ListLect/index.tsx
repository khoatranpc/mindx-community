import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './styles.scss';

interface ItemProps {
    index: number;
}
const ItemList = (props: ItemProps) => {
    return <VerticalTimelineElement
        className="vertical-timeline-element--work h-[25rem] flex items-center"
        contentArrowStyle={{ borderRight: '7px solid var(--base)' }}
        contentStyle={{
            padding: '0',
            marginLeft: `${props.index % 2 !== 0 ? 'auto' : '0'}`,
            marginRight: `${props.index % 2 === 0 ? 'auto' : '0'}`
        }}
        position={`${props.index % 2 === 0 ? 'left' : 'right'}`}
        iconStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            boxShadow: 'none',
            width: '25rem',
            height: '25rem',
            padding: '0',
        }}
        icon={<img src={'/cutBanner.png'} alt='lect' className={`w-[25rem] h-[25rem] rounded-full ${props.index % 2 !== 0 ? "moveRight" : ''}`} />}
    >
        <div className={`content bg-[var(--light-base)!important] p-[1.2rem] text-[var(--base)]`}>
            <h3 className="vertical-timeline-element-title text-[2.4rem] font-bold">Nguyễn Văn Cường</h3>
            <h4 className="vertical-timeline-element-subtitle">Lập trình viên Web Fullstack</h4>
            <p className='des'>
                Có 10 năm kinh nghiệm trong ngành lập trình phần mềm, đã có chứng chỉ nghiệp vụ sư phạm đạt xuất sắc
            </p>
            <button className='moreButton'>Xem thêm</button>
        </div>
    </VerticalTimelineElement>
}

const ListLect = () => {
    return (
        <VerticalTimeline
            lineColor='var(--base)'
            layout='2-columns'

        >
            {[...new Array(5)].map((_, index) => {
                return <ItemList index={index} />
            })}
        </VerticalTimeline>
    )
}

export default ListLect;