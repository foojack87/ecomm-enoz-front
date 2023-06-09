import Hero from '@/components/Hero';
import { Product } from '@/models/Product';
import { mongooseConnect } from '@/lib/mongoose';
import NewProducts from '@/components/NewProducts';
import SignupCTA from '@/components/CTA';
import Gallery from '@/components/Gallery';

export default async function Home() {
  const product = await getFeatureProduct();
  const featuredProduct = product.featuredProduct;
  const newProducts = product.newProducts;

  return (
    <>
      <Gallery />
      <Hero product={featuredProduct} />
      <NewProducts newProducts={newProducts} />
      <SignupCTA />
    </>
  );
}

async function getFeatureProduct() {
  const featuredProductId = '646c38b65c06e5fdea80176b';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
  };
}
