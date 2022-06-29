import React from 'react';
import { useParams } from 'react-router';

function RoomDetail() {
    const { no } = useParams();
    return <div>{no}번 매물 상세 조회 페이지</div>;
}

export default RoomDetail;
