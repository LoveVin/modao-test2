import React, {useEffect} from 'react'
import Card from '../Card';
import './index.scss'
import CardAdd from '../../containers/CardAdd';

const CardList = ({ fetchCardList, visibleCards })=>{
    useEffect(()=>{
        fetchCardList()
    },[])
    return visibleCards.length > 0 ? (
        <div className="groupList">
            { visibleCards.map((card, index) => (
                <Card name={card.name}
                      color={card.color}
                      isLocked={card.isLocked}
                      isPrivate={card.isPrivate}
                      itemCount={card.itemCount}
                      key={index}
                />
            )) }
            <CardAdd/>
        </div>
    ) : (
        <div>加载中...</div>
    )
}

export default CardList