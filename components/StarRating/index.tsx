import React from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';

interface Props {
    className?: string;
    rate: number;
}
const MAX_RATING = 5;
const generateStars = (filledCount: number) => {
    return (
        <div className='flex gap-1'>
            {[...Array(MAX_RATING)].map((_, index) =>
                index < filledCount ? <StarFilled key={index} className="text-[#f19b55]" /> : <StarOutlined key={index} />
            )}
        </div>
    );
};

const ObjectStar: Record<number, React.ReactNode> = {
    1: generateStars(1),
    2: generateStars(2),
    3: generateStars(3),
    4: generateStars(4),
    5: generateStars(5),
};
const StarRating = (props: Props) => {

    return ObjectStar[props.rate]
}

export default StarRating;