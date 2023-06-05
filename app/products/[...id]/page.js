import Center from '@/components/Center';
import Title from '@/components/Title';
import { ColWrapper, Price, PriceRow } from '../layout';
import { Box } from '../layout';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import ProductImages from '@/components/ProductImages';
import CartIcon from '@/components/icons/CartIcon';
import AddToCartButton from '@/components/AddToCartButton';
import { Image } from './layout';

const ProductPage = async ({ params }) => {
  const productInfo = await getProduct(params);

  return (
    <>
      <Center>
        <ColWrapper>
          <Box>
            <ProductImages images={productInfo.images} />
          </Box>
          <div>
            <Title>{productInfo.title}</Title>
            <p>{productInfo.description}</p>
            <div>
              <PriceRow>
                <div>
                  <Price>${productInfo.price}</Price>
                </div>
                <div>
                  <AddToCartButton yellow id={productInfo._id}>
                    <CartIcon />
                    Add to cart
                  </AddToCartButton>
                </div>
              </PriceRow>
            </div>
          </div>
        </ColWrapper>

        <div>
          <hr></hr>
          <Image src={productInfo.images[0]} alt="howtodrink" />
          <Image src="/howto.jpg" alt="howtodrink" />
          <p>
            The brewing time can be increased according to personal preference.
          </p>
        </div>
      </Center>
    </>
  );
};

export default ProductPage;

async function getProduct(params) {
  await mongooseConnect();

  const { id } = params;

  const product = await Product.findById(id);
  console.log(product);

  return JSON.parse(JSON.stringify(product));
}
