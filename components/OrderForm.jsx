import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const OrderForm = ({handleFormClick, product}) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_W3_CONTACT_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("form submitted successfully, i will get back to you regarding payment and shipping. thank you!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='fixed left-0 right-0 top-0 bottom-0 w-full h-full flex items-center justify-center z-30 bg-black/90'>
      <div className='bg-orange-100 md:w-2/3 md:h-3/4 w-[80%] h-[80%] relative p-6 flex items-center justify-center'>
        <AiOutlineClose className='absolute top-2 right-2 text-black w-6 h-auto z-40 cursor-pointer' onClick={handleFormClick}/>
        <form className='flex flex-col justify-between gap-5 w-2/3 items-center' onSubmit={onSubmit}>
          <h1 className='text-center font-bold text-xl'>place an order for a {product.product.toLowerCase()}</h1>
          <input className='p-3 w-2/3' type="text" name="product" value={product.product} hidden />
          <input className='p-3 w-2/3' type="text" name="name" placeholder='name' required/>
          <input className='p-3 w-2/3' type="email" name="email" placeholder='email' required/>
          <textarea className='p-3 w-2/3' name="message" placeholder='type your message here...' required></textarea>

          <button className='cursor-pointer border-black border-2 p-2 bg-orange-100 hover:bg-black hover:text-orange-100 duration-200 font-bold w-fit' type="submit">place order</button>
          <span className='text-center'>{result}</span>
        </form>
      </div>
    </div>
  )
}

export default OrderForm;