import { GoodsItem } from "./GoodsItem";

function GoodsList(props){
 
    const {goods = []} = props;

    if(!goods.length){
       return <h3>Ничего не найдено</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <GoodsItem key={item.id} {...item}/>
            ))}
        </div>
    )
}

export { GoodsList };