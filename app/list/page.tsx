import Image from "next/image";
import food0 from "/public/food0.png"

export default function List() {
    let products: string[] = ['Tomatoes', 'Pasta', 'Coconut'];

    return (
        <div>
            <h4 className="title">상품 목록</h4>
            {
                products.map((item, index) => {
                    return (
                    <div className="food" key={index}>
                        <Image src={`/food${index}.png`} 
                        alt="food" 
                        width={200}
                        height={200}
                        className="food-img"/>
                        <h4>{item} $40</h4>
                    </div>
                    )
                })
            }
        </div>
    )
}