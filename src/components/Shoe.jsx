const Shoe = () => {
    return <main className="shoe container">
    <div className="shoe-content">
    <h1>Your Feet Deserve The Best</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sunt totam! Animi ipsa quasi veniam repudiandae ullam consequuntur ut non quisquam iste suscipit optio ab eligendi voluptate, ratione voluptas eaque!</p>

<div className="shoe-btn">
<button>Shop Now</button>
<button className="secondary-btn">Category</button>
</div>

<div className="shopping"><p>Also Available On</p>
<div className="brand-icons">
<img src="/images/amazon.png" alt="amazon-logo" />
<img src="/images/flipkart.png" alt="flipkart-logo" />
</div>
</div>

    </div>
    <div className="shoe-image">
    <img src="/images/shoe_image.png" alt="shoe-image" />
    </div>
    </main>
};

export default Shoe;