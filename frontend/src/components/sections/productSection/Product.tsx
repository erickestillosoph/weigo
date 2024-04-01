import CardListThree from "@/components/shared/card";
import { products } from "@/lib/placeholders/products";

function Product() {
    return (
        <div className="flex flex-col w-[100%] container gap-[28px]">
            <h1 className="uppercase w_heading_primary section_heading_h3">
                Product
            </h1>
            <div className="flex flex-row flex-1 w-[100%] gap-[32px]">
                {products.slice(0, 3).map((product) => (
                    <CardListThree
                        type="product"
                        key={product.id}
                        src={product.src}
                        title={product.title}
                        subTitle={product.subTitle}
                        activity={product.activity}
                        experience={product.experience}
                    />
                ))}
            </div>
        </div>
    );
}

export default Product;
