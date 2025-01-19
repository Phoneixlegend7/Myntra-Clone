import BagSummary from "../components/BagSummary"
import BagItems from "../components/BagItems"
import { useSelector } from "react-redux"
const Bag = () => {

  const bagSummary = {
    totalItem : 3,
    totalMRP : 2345,
    totalDiscount : 999,
    finalpayment : 1346
  }
  const items = useSelector(store => store.item);
  const bagItems = useSelector(store => store.bagStatus);
  const finalItems = items.filter(item => {
    const itemIndex = bagItems.items.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
          <div className="bag-items-container">
          {
            finalItems.map((finalitem) => (
            <BagItems key = {finalitem.id} item={finalitem} />
          ))
          }
          </div>
          <div className="bag-summary">
            <BagSummary bagSummary = {bagSummary}/>
          </div>
      </div>
    </main> 
  )
}

export default Bag