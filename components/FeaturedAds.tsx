import FeaturedAdsItem from "./ui/FeaturedAdsItem";

export default function FeaturedAds() {
    return <section className="w-full max-w-7xl mx-auto my-6 grid grid-cols-3 gap-6 py-0 px-5">
        <FeaturedAdsItem type={3} title="Samsung Galaxy S A50" ownerFullName="Dejan Covic" price="€43" imageUrl="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a50-sm-a505f-ds.jpg" />
        <FeaturedAdsItem type={1} title="Ovaj oglas je posećen najviše od svih drugih oglasa na sajtu.Iphone 16 Pro Max 256 GB / NOVO / VAKU" ownerFullName="Andrej Misic" price="€1240" imageUrl="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg" />
        <FeaturedAdsItem type={2} title="Samsung Galaxy S22 Ultra" ownerFullName="Dimitrije Saric" price="€399" imageUrl="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg" />
    </section>
}