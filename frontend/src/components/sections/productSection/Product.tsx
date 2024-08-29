import { CardListThree } from "@/components/shared/card";
import { products } from "@/lib/placeholders/products";
import { useSetUseIsProductState } from "@/state/common/useBooking";

interface ProductClickParams {
    type: string;
    price: string;
    symbol: string;
    image: string;
    title: string;
}
function Product() {
    const isProduct = useSetUseIsProductState();
    const handleClick = ({
        type,
        price,
        image,
        title,
        symbol,
    }: ProductClickParams) => {
        isProduct({
            type: type,
            price: price,
            state: true,
            image: image,
            title: title,
            symbol: symbol,
        });
    };
    return (
        <div className="flex flex-col w-[100%] container gap-[28px]">
            <div className="flex sm:justify-between justify-center sm:items-end sm:flex-row flex-col sm:gap-4 gap-6">
                <h1 className="uppercase w_heading_primary text_section_h3_clamp">
                    Product
                </h1>
                <a
                    className="w_heading_primary text_section_link_clamp font-semibold"
                    href="#"
                >
                    View more
                </a>
            </div>
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[100%] gap-[32px]">
                {products.slice(0, 3).map((product) => (
                    <CardListThree
                        type="product"
                        key={product.id}
                        src={product.src}
                        title={product.title}
                        subTitle={product.subTitle}
                        activity={product.activity}
                        experience={product.experience}
                        price={product.price}
                        onClick={({ price, type, image, title, symbol }) =>
                            handleClick({ price, type, image, title, symbol })
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default Product;
