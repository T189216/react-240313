import React from 'react';
import styled from 'styled-components';
import CommentListItem from './CommentListIte';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-itmes: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props) {
    const { commnets } = props;

    return (
        <Wrapper>
            {commnets.map((commnet, index) => {
                return <CommentListItem key={commnet.id} commnet={commnet} />;
            })}
        </Wrapper>
    );
}

export default CommentList;