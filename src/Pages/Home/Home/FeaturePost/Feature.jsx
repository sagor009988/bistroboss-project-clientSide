import feature from "../../../../assets/home/featured.jpg"
import Sections from "../../../../Components/Section/Sections";
import "./feature.css"


const Feature = () => {
    return (
        <section className="feature-bg my-10 text-white pt-7">
            <Sections  subHeading="---Check it out---" heading="FROM OUR MENU"
            ></Sections>
            <div className="flex gap-8 justify-center items-center mx-60 pb-28">
                <div className="flex-1"><img src={feature} alt="" /></div>
                <div className="flex-1">
                    <h1 className="text-3xl">March 20, 2023</h1>
                    <h1 className="text-3xl">WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam error commodi aspernatur unde deleniti porro, quae consequuntur placeat molestias amet laudantium aliquid dolor odio recusandae nostrum perspiciatis dolorem cumque maiores voluptas harum! Labore, dolorum. Voluptas, eos. Quam, architecto error.</p>
                    <button className='btn btn-outline text-white  border-0 border-b-2'>Red More</button>
                </div>
            </div>
            
        </section>
    );
};

export default Feature;