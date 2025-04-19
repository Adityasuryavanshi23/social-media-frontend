import React from "react";
import logo from "../../assets/unnamed (1).jpg";
export const PaymentButton = () => {
  const [animate, setanimate] = React.useState(false);
  const handlePayments = () => {
    setanimate(true);
    setTimeout(() => {
      setanimate(false);
    }, 500);
    const options = {
      key: "rzp_test_FjpUVVQrWWjNtZ",
      amount: 500000,
      currency: "INR",
      name: "Social Hub",
      description: "Get Subscription",
      image: logo,
      handler: function (response) {
        // Handle the payment response here
        alert("Payment ID : " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Social Hub",
        email: "SocialHub@12gmail.com",
        contact: "1234567890",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      alert("Payment failed" + response.error.description);
    });
    rzp.open();
  };
  return (
    <button
      onClick={handlePayments}
      className={`py-2 px-4 rounded-md  text-xl text-white bg-green-500 hover:bg-green-600 transition duration-300 ${
        animate ? "animate-bounce" : ""
      }`}
    >
      Get Subscription
    </button>
  );
};
