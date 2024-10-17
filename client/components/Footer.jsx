import Link from "next/link";
import style from "../app/style.module.css";
import { Marck_Script } from "next/font/google";
import { useGetContext } from "@/services/formStateContext";

const marckScript = Marck_Script({
  weight: "400", // This font only has 400 weight
  subsets: ["latin"], // Define the subset you want to use
  display: "swap", // Optional: adds swap behavior for better performance
});

export default function Footer() {
  const { setState } = useGetContext();

  return (
    // <footer className={style.colorThree + " text-white z-40"}>
    //   <div className=" text-center sm:flex justify-center sm:justify-between items-center mx-5">
    //     <p>&copy; 2024 UDCPR Calc. All rights reserved.</p>
    //     <div className="flex pt-2 ">
    //       <Link href="privacy" className="px-3">
    //         Privacy Policy
    //       </Link>
    //       <Link href="terms" className="px-3">
    //         Terms of Service
    //       </Link>
    //       <Link href="refund" className="px-3">
    //         Refund Policy
    //       </Link>
    //     </div>
    //   </div>
    // </footer>

    <footer className={style.colorThree}>
      <div className="mx-auto max-w-7xl sm:px-0 px-[5%] p-4 pt-6 lg:pt-8 ">
        <div className="md:flex md:justify-between">
          <div className=" sm:space-y-20 space-y-8">
            <div>
              <Link href="/" className="flex items-center ">
                <h1 className=" sm:text-5xl text-3xl font-bold text-white mr-1">UDCPR</h1>
                <span
                  className={
                    marckScript.className + " sm:text-3xl text-xl sm:-mb-4 -mb-2 text-[#ffca57]"
                  }
                >
                  simplified
                </span>
              </Link>
              <p className="text-gray-300 pt-2">
                Simplifying the UDCPR calculation process with easy-to-use tools
                and resources.
              </p>
            </div>

            <div className=" ">
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-gray-400">
                Follow Us
              </h2>
              <ul className="flex gap-2 fill-gray-400">
                <li>
                  <Link href="#">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      ></path>{" "}
                      <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                      ></path>{" "}
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      viewBox="0 0 24 24"
                      width="26px"
                      height="26px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
                      ></path>{" "}
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      width="26px"
                      height="26px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6ZM9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11V17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17V11ZM9.5 7.5C9.5 8.32843 8.82843 9 8 9C7.17157 9 6.5 8.32843 6.5 7.5C6.5 6.67157 7.17157 6 8 6C8.82843 6 9.5 6.67157 9.5 7.5ZM12 10C12.3395 10 12.6395 10.1692 12.8203 10.4279C13.3329 10.1502 13.9036 10 14.5 10C16.6594 10 18 11.9258 18 13.5714V13.579V13.5865V13.5941V13.6017V13.6093V13.617V13.6246V13.6323V13.64V13.6477V13.6555V13.6632V13.671V13.6788V13.6866V13.6944V13.7022V13.7101V13.718V13.7258V13.7338V13.7417V13.7496V13.7576V13.7655V13.7735V13.7815V13.7896V13.7976V13.8057V13.8137V13.8218V13.8299V13.838V13.8462V13.8543V13.8625V13.8706V13.8788V13.887V13.8953V13.9035V13.9117V13.92V13.9283V13.9365V13.9448V13.9532V13.9615V13.9698V13.9782V13.9866V13.9949V14.0033V14.0117V14.0201V14.0286V14.037V14.0455V14.0539V14.0624V14.0709V14.0794V14.0879V14.0964V14.1049V14.1135V14.122V14.1306V14.1392V14.1478V14.1563V14.165V14.1736V14.1822V14.1908V14.1995V14.2081V14.2168V14.2254V14.2341V14.2428V14.2515V14.2602V14.2689V14.2776V14.2864V14.2951V14.3039V14.3126V14.3214V14.3301V14.3389V14.3477V14.3565V14.3653V14.3741V14.3829V14.3917V14.4005V14.4093V14.4182V14.427V14.4359V14.4447V14.4536V14.4624V14.4713V14.4802V14.4891V14.4979V14.5068V14.5157V14.5246V14.5335V14.5424V14.5513V14.5602V14.5692V14.5781V14.587V14.5959V14.6049V14.6138V14.6227V14.6317V14.6406V14.6496V14.6585V14.6674V14.6764V14.6854V14.6943V14.7033V14.7122V14.7212V14.7302V14.7391V14.7481V14.757V14.766V14.775V14.7839V14.7929V14.8019V14.8108V14.8198V14.8288V14.8378V14.8467V14.8557V14.8647V14.8736V14.8826V14.8916V14.9005V14.9095V14.9184V14.9274V14.9363V14.9453V14.9543V14.9632V14.9722V14.9811V14.99V14.999V15.0079V15.0169V15.0258V15.0347V15.0436V15.0526V15.0615V15.0704V15.0793V15.0882V15.0971V15.106V15.1149V15.1238V15.1327V15.1416V15.1504V15.1593V15.1682V15.177V15.1859V15.1947V15.2036V15.2124V15.2213V15.2301V15.2389V15.2477V15.2565V15.2653V15.2741V15.2829V15.2917V15.3005V15.3092V15.318V15.3267V15.3355V15.3442V15.3529V15.3616V15.3703V15.379V15.3877V15.3964V15.4051V15.4138V15.4224V15.4311V15.4397V15.4483V15.457V15.4656V15.4742V15.4827V15.4913V15.4999V15.5085V15.517V15.5255V15.5341V15.5426V15.5511V15.5596V15.5681V15.5765V15.585V15.5934V15.6019V15.6103V15.6187V15.6271V15.6355V15.6439V15.6522V15.6606V15.6689V15.6772V15.6855V15.6938V15.7021V15.7104V15.7186V15.7269V15.7351V15.7433V15.7515V15.7597V15.7679V15.776V15.7842V15.7923V15.8004V15.8085V15.8166V15.8246V15.8327V15.8407V15.8487V15.8567V15.8647V15.8727V15.8806V15.8885V15.8965V15.9044V15.9122V15.9201V15.928V15.9358V15.9436V15.9514V15.9592V15.9669V15.9747V15.9824V15.9901V15.9978V16.0055V16.0131V16.0208V16.0284V16.036V16.0435V16.0511V16.0586V16.0661V16.0736V16.0811V16.0886V16.096V16.1034V16.1108V16.1182V16.1255V16.1329V16.1402V16.1475V16.1547V16.162V16.1692V16.1764V16.1836V16.1908V16.1979V16.205V16.2121V16.2192V16.2262V16.2332V16.2402V16.2472V16.2542V16.2611V16.268V16.2749V16.2818V16.2886V16.2954V16.3022V16.309V16.3157V16.3224V16.3291V16.3358V16.3425V16.3491V16.3557V16.3622V16.3688V16.3753V16.3818V16.3882V16.3947V16.4011V16.4075V16.4138V16.4202V16.4265V16.4328V16.439V16.4452V16.4514V16.4576V16.4638V16.4699V16.476V16.482V16.4881V16.4941V16.5V16.506V16.5119V16.5178V16.5237V16.5295V16.5353V16.5411V16.5468V16.5525V16.5582V16.5639V16.5695V16.5751V16.5807V16.5862V16.5917V16.5972V16.6026V16.6081V16.6134V16.6188V16.6241V16.6294V16.6347V16.6399V16.6451V16.6503V16.6554V16.6605V16.6656V16.6706V16.6756V16.6806V16.6855V16.6904V16.6953V16.7001V16.7049V16.7097V16.7144V16.7191V16.7238V16.7284V16.733V16.7376V16.7421V16.7466V16.7511V16.7555V16.7599V16.7643V16.7686V16.7729V16.7771V16.7813V16.7855V16.7897V16.7938V16.7978V16.8019V16.8059V16.8098V16.8138V16.8177V16.8215V16.8253V16.8291V16.8328V16.8365V16.8402V16.8438V16.8474V16.851V16.8545V16.858V16.8614V16.8648V16.8682V16.8715V16.8748V16.878V16.8812V16.8844V16.8875V16.8906V16.8936V16.8966V16.8996V16.9025V16.9054V16.9083V16.9111V16.9138V16.9165V16.9192V16.9219V16.9245V16.927V16.9295V16.932V16.9344V16.9368V16.9392V16.9415V16.9438V16.946V16.9481V16.9503V16.9524V16.9544V16.9564V16.9584V16.9603V16.9622V16.964V16.9658V16.9676V16.9693V16.9709V16.9725V16.9741V16.9756V16.9771V16.9785V16.9799V16.9813V16.9826V16.9838V16.985V16.9862V16.9873V16.9884V16.9894V16.9904V16.9913V16.9922V16.993V16.9938V16.9946V16.9953V16.9959V16.9965V16.9971V16.9976V16.998V16.9984V16.9988V16.9991V16.9994V16.9996V16.9998V16.9999V17C18 17 18 17 18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 17 16 17 16 17V16.9999V16.9998V16.9996V16.9994V16.9991V16.9988V16.9984V16.998V16.9976V16.9971V16.9965V16.9959V16.9953V16.9946V16.9938V16.993V16.9922V16.9913V16.9904V16.9894V16.9884V16.9873V16.9862V16.985V16.9838V16.9826V16.9813V16.9799V16.9785V16.9771V16.9756V16.9741V16.9725V16.9709V16.9693V16.9676V16.9658V16.964V16.9622V16.9603V16.9584V16.9564V16.9544V16.9524V16.9503V16.9481V16.946V16.9438V16.9415V16.9392V16.9368V16.9344V16.932V16.9295V16.927V16.9245V16.9219V16.9192V16.9165V16.9138V16.9111V16.9083V16.9054V16.9025V16.8996V16.8966V16.8936V16.8906V16.8875V16.8844V16.8812V16.878V16.8748V16.8715V16.8682V16.8648V16.8614V16.858V16.8545V16.851V16.8474V16.8438V16.8402V16.8365V16.8328V16.8291V16.8253V16.8215V16.8177V16.8138V16.8098V16.8059V16.8019V16.7978V16.7938V16.7897V16.7855V16.7813V16.7771V16.7729V16.7686V16.7643V16.7599V16.7555V16.7511V16.7466V16.7421V16.7376V16.733V16.7284V16.7238V16.7191V16.7144V16.7097V16.7049V16.7001V16.6953V16.6904V16.6855V16.6806V16.6756V16.6706V16.6656V16.6605V16.6554V16.6503V16.6451V16.6399V16.6347V16.6294V16.6241V16.6188V16.6134V16.6081V16.6026V16.5972V16.5917V16.5862V16.5807V16.5751V16.5695V16.5639V16.5582V16.5525V16.5468V16.5411V16.5353V16.5295V16.5237V16.5178V16.5119V16.506V16.5V16.4941V16.4881V16.482V16.476V16.4699V16.4638V16.4576V16.4514V16.4452V16.439V16.4328V16.4265V16.4202V16.4138V16.4075V16.4011V16.3947V16.3882V16.3818V16.3753V16.3688V16.3622V16.3557V16.3491V16.3425V16.3358V16.3291V16.3224V16.3157V16.309V16.3022V16.2954V16.2886V16.2818V16.2749V16.268V16.2611V16.2542V16.2472V16.2402V16.2332V16.2262V16.2192V16.2121V16.205V16.1979V16.1908V16.1836V16.1764V16.1692V16.162V16.1547V16.1475V16.1402V16.1329V16.1255V16.1182V16.1108V16.1034V16.096V16.0886V16.0811V16.0736V16.0661V16.0586V16.0511V16.0435V16.036V16.0284V16.0208V16.0131V16.0055V15.9978V15.9901V15.9824V15.9747V15.9669V15.9592V15.9514V15.9436V15.9358V15.928V15.9201V15.9122V15.9044V15.8965V15.8885V15.8806V15.8727V15.8647V15.8567V15.8487V15.8407V15.8327V15.8246V15.8166V15.8085V15.8004V15.7923V15.7842V15.776V15.7679V15.7597V15.7515V15.7433V15.7351V15.7269V15.7186V15.7104V15.7021V15.6938V15.6855V15.6772V15.6689V15.6606V15.6522V15.6439V15.6355V15.6271V15.6187V15.6103V15.6019V15.5934V15.585V15.5765V15.5681V15.5596V15.5511V15.5426V15.5341V15.5255V15.517V15.5085V15.4999V15.4913V15.4827V15.4742V15.4656V15.457V15.4483V15.4397V15.4311V15.4224V15.4138V15.4051V15.3964V15.3877V15.379V15.3703V15.3616V15.3529V15.3442V15.3355V15.3267V15.318V15.3092V15.3005V15.2917V15.2829V15.2741V15.2653V15.2565V15.2477V15.2389V15.2301V15.2213V15.2124V15.2036V15.1947V15.1859V15.177V15.1682V15.1593V15.1504V15.1416V15.1327V15.1238V15.1149V15.106V15.0971V15.0882V15.0793V15.0704V15.0615V15.0526V15.0436V15.0347V15.0258V15.0169V15.0079V14.999V14.99V14.9811V14.9722V14.9632V14.9543V14.9453V14.9363V14.9274V14.9184V14.9095V14.9005V14.8916V14.8826V14.8736V14.8647V14.8557V14.8467V14.8378V14.8288V14.8198V14.8108V14.8019V14.7929V14.7839V14.775V14.766V14.757V14.7481V14.7391V14.7302V14.7212V14.7122V14.7033V14.6943V14.6854V14.6764V14.6674V14.6585V14.6496V14.6406V14.6317V14.6227V14.6138V14.6049V14.5959V14.587V14.5781V14.5692V14.5602V14.5513V14.5424V14.5335V14.5246V14.5157V14.5068V14.4979V14.4891V14.4802V14.4713V14.4624V14.4536V14.4447V14.4359V14.427V14.4182V14.4093V14.4005V14.3917V14.3829V14.3741V14.3653V14.3565V14.3477V14.3389V14.3301V14.3214V14.3126V14.3039V14.2951V14.2864V14.2776V14.2689V14.2602V14.2515V14.2428V14.2341V14.2254V14.2168V14.2081V14.1995V14.1908V14.1822V14.1736V14.165V14.1563V14.1478V14.1392V14.1306V14.122V14.1135V14.1049V14.0964V14.0879V14.0794V14.0709V14.0624V14.0539V14.0455V14.037V14.0286V14.0201V14.0117V14.0033V13.9949V13.9866V13.9782V13.9698V13.9615V13.9532V13.9448V13.9365V13.9283V13.92V13.9117V13.9035V13.8953V13.887V13.8788V13.8706V13.8625V13.8543V13.8462V13.838V13.8299V13.8218V13.8137V13.8057V13.7976V13.7896V13.7815V13.7735V13.7655V13.7576V13.7496V13.7417V13.7338V13.7258V13.718V13.7101V13.7022V13.6944V13.6866V13.6788V13.671V13.6632V13.6555V13.6477V13.64V13.6323V13.6246V13.617V13.6093V13.6017V13.5941V13.5865V13.579V13.5714C16 12.8032 15.3406 12 14.5 12C13.9759 12 13.3974 12.2849 13 12.9631V12.9658V12.9761V12.9864V12.9967V13.0071V13.0174V13.0278V13.0382V13.0487V13.0591V13.0695V13.08V13.0905V13.101V13.1115V13.122V13.1326V13.1432V13.1537V13.1643V13.1749V13.1855V13.1962V13.2068V13.2175V13.2282V13.2388V13.2496V13.2603V13.271V13.2817V13.2925V13.3033V13.314V13.3248V13.3356V13.3464V13.3573V13.3681V13.379V13.3898V13.4007V13.4116V13.4225V13.4334V13.4443V13.4552V13.4662V13.4771V13.4881V13.499V13.51V13.521V13.532V13.543V13.554V13.565V13.5761V13.5871V13.5981V13.6092V13.6203V13.6313V13.6424V13.6535V13.6646V13.6757V13.6868V13.6979V13.709V13.7202V13.7313V13.7424V13.7536V13.7647V13.7759V13.7871V13.7982V13.8094V13.8206V13.8318V13.8429V13.8541V13.8653V13.8765V13.8878V13.899V13.9102V13.9214V13.9326V13.9438V13.9551V13.9663V13.9775V13.9888V14V14.0113V14.0225V14.0338V14.045V14.0562V14.0675V14.0788V14.09V14.1013V14.1125V14.1238V14.135V14.1463V14.1576V14.1688V14.1801V14.1913V14.2026V14.2139V14.2251V14.2364V14.2476V14.2589V14.2701V14.2814V14.2926V14.3039V14.3151V14.3264V14.3376V14.3489V14.3601V14.3714V14.3826V14.3938V14.405V14.4163V14.4275V14.4387V14.4499V14.4611V14.4723V14.4835V14.4947V14.5059V14.5171V14.5283V14.5395V14.5506V14.5618V14.573V14.5841V14.5953V14.6064V14.6176V14.6287V14.6398V14.6509V14.662V14.6732V14.6843V14.6953V14.7064V14.7175V14.7286V14.7396V14.7507V14.7617V14.7728V14.7838V14.7948V14.8058V14.8168V14.8278V14.8388V14.8498V14.8607V14.8717V14.8826V14.8936V14.9045V14.9154V14.9263V14.9372V14.9481V14.9589V14.9698V14.9806V14.9915V15.0023V15.0131V15.0239V15.0347V15.0455V15.0562V15.067V15.0777V15.0884V15.0991V15.1098V15.1205V15.1312V15.1419V15.1525V15.1631V15.1737V15.1843V15.1949V15.2055V15.2161V15.2266V15.2371V15.2476V15.2581V15.2686V15.2791V15.2895V15.2999V15.3104V15.3208V15.3311V15.3415V15.3519V15.3622V15.3725V15.3828V15.3931V15.4033V15.4136V15.4238V15.434V15.4442V15.4544V15.4645V15.4747V15.4848V15.4949V15.5049V15.515V15.525V15.535V15.545V15.555V15.565V15.5749V15.5848V15.5947V15.6046V15.6144V15.6243V15.6341V15.6439V15.6536V15.6634V15.6731V15.6828V15.6925V15.7021V15.7118V15.7214V15.731V15.7405V15.7501V15.7596V15.7691V15.7786V15.788V15.7974V15.8068V15.8162V15.8256V15.8349V15.8442V15.8534V15.8627V15.8719V15.8811V15.8903V15.8994V15.9086V15.9177V15.9267V15.9358V15.9448V15.9538V15.9627V15.9717V15.9806V15.9895V15.9983V16.0071V16.0159V16.0247V16.0334V16.0421V16.0508V16.0595V16.0681V16.0767V16.0853V16.0938V16.1023V16.1108V16.1193V16.1277V16.1361V16.1444V16.1527V16.161V16.1693V16.1776V16.1858V16.1939V16.2021V16.2102V16.2183V16.2263V16.2343V16.2423V16.2503V16.2582V16.2661V16.2739V16.2817V16.2895V16.2973V16.305V16.3127V16.3203V16.328V16.3356V16.3431V16.3506V16.3581V16.3656V16.373V16.3803V16.3877V16.395V16.4023V16.4095V16.4167V16.4239V16.431V16.4381V16.4451V16.4522V16.4591V16.4661V16.473V16.4799V16.4867V16.4935V16.5002V16.507V16.5137V16.5203V16.5269V16.5335V16.54V16.5465V16.5529V16.5593V16.5657V16.5721V16.5783V16.5846V16.5908V16.597V16.6031V16.6092V16.6153V16.6213V16.6272V16.6332V16.6391V16.6449V16.6507V16.6565V16.6622V16.6679V16.6735V16.6791V16.6847V16.6902V16.6956V16.7011V16.7064V16.7118V16.7171V16.7223V16.7275V16.7327V16.7378V16.7429V16.7479V16.7529V16.7578V16.7627V16.7676V16.7724V16.7772V16.7819V16.7865V16.7912V16.7957V16.8003V16.8048V16.8092V16.8136V16.8179V16.8222V16.8265V16.8307V16.8348V16.839V16.843V16.847V16.851V16.8549V16.8588V16.8626V16.8664V16.8701V16.8738V16.8774V16.881V16.8845V16.888V16.8914V16.8948V16.8981V16.9014V16.9046V16.9078V16.9109V16.914V16.917V16.92V16.9229V16.9258V16.9286V16.9313V16.9341V16.9367V16.9393V16.9419V16.9444V16.9468V16.9492V16.9516V16.9539V16.9561V16.9583V16.9604V16.9625V16.9645V16.9665V16.9684V16.9703V16.9721V16.9738V16.9755V16.9771V16.9787V16.9803V16.9817V16.9831V16.9845V16.9858V16.9871V16.9883V16.9894V16.9905V16.9915V16.9925V16.9934V16.9942V16.995V16.9957V16.9964V16.997V16.9976V16.9981V16.9985V16.9989V16.9993V16.9995V16.9997V16.9999V17V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V17V16.9999V16.9997V16.9995V16.9993V16.9989V16.9985V16.9981V16.9976V16.997V16.9964V16.9957V16.995V16.9942V16.9934V16.9925V16.9915V16.9905V16.9894V16.9883V16.9871V16.9858V16.9845V16.9831V16.9817V16.9803V16.9787V16.9771V16.9755V16.9738V16.9721V16.9703V16.9684V16.9665V16.9645V16.9625V16.9604V16.9583V16.9561V16.9539V16.9516V16.9492V16.9468V16.9444V16.9419V16.9393V16.9367V16.9341V16.9313V16.9286V16.9258V16.9229V16.92V16.917V16.914V16.9109V16.9078V16.9046V16.9014V16.8981V16.8948V16.8914V16.888V16.8845V16.881V16.8774V16.8738V16.8701V16.8664V16.8626V16.8588V16.8549V16.851V16.847V16.843V16.839V16.8348V16.8307V16.8265V16.8222V16.8179V16.8136V16.8092V16.8048V16.8003V16.7957V16.7912V16.7865V16.7819V16.7772V16.7724V16.7676V16.7627V16.7578V16.7529V16.7479V16.7429V16.7378V16.7327V16.7275V16.7223V16.7171V16.7118V16.7064V16.7011V16.6956V16.6902V16.6847V16.6791V16.6735V16.6679V16.6622V16.6565V16.6507V16.6449V16.6391V16.6332V16.6272V16.6213V16.6153V16.6092V16.6031V16.597V16.5908V16.5846V16.5783V16.5721V16.5657V16.5593V16.5529V16.5465V16.54V16.5335V16.5269V16.5203V16.5137V16.507V16.5002V16.4935V16.4867V16.4799V16.473V16.4661V16.4591V16.4522V16.4451V16.4381V16.431V16.4239V16.4167V16.4095V16.4023V16.395V16.3877V16.3803V16.373V16.3656V16.3581V16.3506V16.3431V16.3356V16.328V16.3203V16.3127V16.305V16.2973V16.2895V16.2817V16.2739V16.2661V16.2582V16.2503V16.2423V16.2343V16.2263V16.2183V16.2102V16.2021V16.1939V16.1858V16.1776V16.1693V16.161V16.1527V16.1444V16.1361V16.1277V16.1193V16.1108V16.1023V16.0938V16.0853V16.0767V16.0681V16.0595V16.0508V16.0421V16.0334V16.0247V16.0159V16.0071V15.9983V15.9895V15.9806V15.9717V15.9627V15.9538V15.9448V15.9358V15.9267V15.9177V15.9086V15.8994V15.8903V15.8811V15.8719V15.8627V15.8534V15.8442V15.8349V15.8256V15.8162V15.8068V15.7974V15.788V15.7786V15.7691V15.7596V15.7501V15.7405V15.731V15.7214V15.7118V15.7021V15.6925V15.6828V15.6731V15.6634V15.6536V15.6439V15.6341V15.6243V15.6144V15.6046V15.5947V15.5848V15.5749V15.565V15.555V15.545V15.535V15.525V15.515V15.5049V15.4949V15.4848V15.4747V15.4645V15.4544V15.4442V15.434V15.4238V15.4136V15.4033V15.3931V15.3828V15.3725V15.3622V15.3519V15.3415V15.3311V15.3208V15.3104V15.2999V15.2895V15.2791V15.2686V15.2581V15.2476V15.2371V15.2266V15.2161V15.2055V15.1949V15.1843V15.1737V15.1631V15.1525V15.1419V15.1312V15.1205V15.1098V15.0991V15.0884V15.0777V15.067V15.0562V15.0455V15.0347V15.0239V15.0131V15.0023V14.9915V14.9806V14.9698V14.9589V14.9481V14.9372V14.9263V14.9154V14.9045V14.8936V14.8826V14.8717V14.8607V14.8498V14.8388V14.8278V14.8168V14.8058V14.7948V14.7838V14.7728V14.7617V14.7507V14.7396V14.7286V14.7175V14.7064V14.6953V14.6843V14.6732V14.662V14.6509V14.6398V14.6287V14.6176V14.6064V14.5953V14.5841V14.573V14.5618V14.5506V14.5395V14.5283V14.5171V14.5059V14.4947V14.4835V14.4723V14.4611V14.4499V14.4387V14.4275V14.4163V14.405V14.3938V14.3826V14.3714V14.3601V14.3489V14.3376V14.3264V14.3151V14.3039V14.2926V14.2814V14.2701V14.2589V14.2476V14.2364V14.2251V14.2139V14.2026V14.1913V14.1801V14.1688V14.1576V14.1463V14.135V14.1238V14.1125V14.1013V14.09V14.0788V14.0675V14.0562V14.045V14.0338V14.0225V14.0113V14V13.9888V13.9775V13.9663V13.9551V13.9438V13.9326V13.9214V13.9102V13.899V13.8878V13.8765V13.8653V13.8541V13.8429V13.8318V13.8206V13.8094V13.7982V13.7871V13.7759V13.7647V13.7536V13.7424V13.7313V13.7202V13.709V13.6979V13.6868V13.6757V13.6646V13.6535V13.6424V13.6313V13.6203V13.6092V13.5981V13.5871V13.5761V13.565V13.554V13.543V13.532V13.521V13.51V13.499V13.4881V13.4771V13.4662V13.4552V13.4443V13.4334V13.4225V13.4116V13.4007V13.3898V13.379V13.3681V13.3573V13.3464V13.3356V13.3248V13.314V13.3033V13.2925V13.2817V13.271V13.2603V13.2496V13.2388V13.2282V13.2175V13.2068V13.1962V13.1855V13.1749V13.1643V13.1537V13.1432V13.1326V13.122V13.1115V13.101V13.0905V13.08V13.0695V13.0591V13.0487V13.0382V13.0278V13.0174V13.0071V12.9967V12.9864V12.9761V12.9658V12.9555V12.9452V12.9349V12.9247V12.9145V12.9043V12.8941V12.884V12.8738V12.8637V12.8536V12.8435V12.8335V12.8234V12.8134V12.8034V12.7934V12.7834V12.7735V12.7636V12.7537V12.7438V12.7339V12.7241V12.7143V12.7104V12.7064V12.7025V12.6985V12.6946V12.6906V12.6866V12.6826V12.6786V12.6746V12.6706V12.6666V12.6626V12.6586V12.6545V12.6505V12.6464V12.6423V12.6383V12.6342V12.6301V12.626V12.6219V12.6178V12.6137V12.6096V12.6055V12.6013V12.5972V12.593V12.5889V12.5847V12.5805V12.5764V12.5722V12.568V12.5638V12.5596V12.5554V12.5512V12.547V12.5427V12.5385V12.5343V12.53V12.5258V12.5215V12.5173V12.513V12.5087V12.5045V12.5002V12.4959V12.4916V12.4873V12.483V12.4787V12.4744V12.4701V12.4657V12.4614V12.4571V12.4528V12.4484V12.4441V12.4397V12.4354V12.431V12.4266V12.4223V12.4179V12.4135V12.4092V12.4048V12.4004V12.396V12.3916V12.3872V12.3828V12.3784V12.374V12.3696V12.3652V12.3607V12.3563V12.3519V12.3475V12.343V12.3386V12.3342V12.3297V12.3253V12.3208V12.3164V12.3119V12.3075V12.303V12.2986V12.2941V12.2896V12.2852V12.2807V12.2762V12.2718V12.2673V12.2628V12.2583V12.2539V12.2494V12.2449V12.2404V12.2359V12.2314V12.227V12.2225V12.218V12.2135V12.209V12.2045V12.2V12.1955V12.191V12.1865V12.182V12.1775V12.173V12.1685V12.164V12.1595V12.155V12.1505V12.146V12.1415V12.137V12.1325V12.128V12.1235V12.119V12.1145V12.11V12.1055V12.1009V12.0964V12.0919V12.0874V12.0829V12.0784V12.0739V12.0694V12.0649V12.0604V12.056V12.0515V12.047V12.0425V12.038V12.0335V12.029V12.0245V12.02V12.0155V12.0111V12.0066V12.0021V11.9976V11.9932V11.9887V11.9842V11.9797V11.9753V11.9708V11.9663V11.9619V11.9574V11.953V11.9485V11.9441V11.9396V11.9352V11.9307V11.9263V11.9219V11.9174V11.913V11.9086V11.9041V11.8997V11.8953V11.8909V11.8865V11.8821V11.8777V11.8733V11.8689V11.8645V11.8601V11.8557V11.8513V11.847V11.8426V11.8382V11.8338V11.8295V11.8251V11.8208V11.8164V11.8121V11.8077V11.8034V11.7991V11.7948V11.7904V11.7861V11.7818V11.7775V11.7732V11.7689V11.7646V11.7603V11.7561V11.7518V11.7475V11.7433V11.739V11.7347V11.7305V11.7263V11.722V11.7178V11.7136V11.7094V11.7052V11.7009V11.6967V11.6926V11.6884V11.6842V11.68V11.6759V11.6717V11.6675V11.6634V11.6593V11.6551V11.651V11.6469V11.6428V11.6387V11.6346V11.6305V11.6264V11.6223V11.6183V11.6142V11.6101V11.6061V11.6021V11.598V11.594V11.59V11.586V11.582V11.578V11.574V11.57V11.5661V11.5621V11.5582V11.5542V11.5503V11.5464V11.5424V11.5385V11.5346V11.5308V11.5269V11.523V11.5191V11.5153V11.5114V11.5076V11.5038V11.5V11.4962V11.4924V11.4886V11.4848V11.481V11.4773V11.4735V11.4698V11.4661V11.4623V11.4586V11.4549V11.4512V11.4476V11.4439V11.4402V11.4366V11.4329V11.4293V11.4257V11.4221V11.4185V11.4149V11.4113V11.4078V11.4042V11.4007V11.3971V11.3936V11.3901V11.3866V11.3831V11.3797V11.3762V11.3728V11.3693V11.3659V11.3625V11.3591V11.3557V11.3523V11.3489V11.3456V11.3422V11.3389V11.3356V11.3323V11.329V11.3257V11.3224V11.3192V11.3159V11.3127V11.3095V11.3063V11.3031V11.2999V11.2967V11.2936V11.2904V11.2873V11.2842V11.2811V11.278V11.2749V11.2719V11.2688V11.2658V11.2628V11.2598V11.2568V11.2538V11.2508V11.2479V11.2449V11.242V11.2391V11.2362V11.2333V11.2305V11.2276V11.2248V11.2219V11.2191V11.2163V11.2136V11.2108V11.2081V11.2053V11.2026V11.1999V11.1972V11.1945V11.1919V11.1892V11.1866V11.184V11.1814V11.1788V11.1763V11.1737V11.1712V11.1687V11.1662V11.1637V11.1612V11.1588V11.1563V11.1539V11.1515V11.1491V11.1467V11.1444V11.142V11.1397V11.1374V11.1351V11.1329V11.1306V11.1284V11.1261V11.1239V11.1217V11.1196V11.1174V11.1153V11.1132V11.1111V11.109V11.1069V11.1049V11.1028V11.1008V11.0988V11.0969V11.0949V11.093V11.091V11.0891V11.0873V11.0854V11.0835V11.0817V11.0799V11.0781V11.0763V11.0746V11.0728V11.0711V11.0694V11.0677V11.0661V11.0644V11.0628V11.0612V11.0596V11.058V11.0565V11.055V11.0535V11.052V11.0505V11.049V11.0476V11.0462V11.0448V11.0434V11.0421V11.0408V11.0394V11.0382V11.0369V11.0356V11.0344V11.0332V11.032V11.0308V11.0297V11.0286V11.0275V11.0264V11.0253V11.0243V11.0232V11.0222V11.0213V11.0203V11.0194V11.0185V11.0176V11.0167V11.0158V11.015V11.0142V11.0134V11.0126V11.0119V11.0112V11.0105V11.0098V11.0091V11.0085V11.0079V11.0073V11.0067V11.0062V11.0057V11.0052V11.0047V11.0042V11.0038V11.0034V11.003V11.0027V11.0023V11.002V11.0017V11.0014V11.0012V11.001V11.0008V11.0006V11.0004V11.0003V11.0002V11.0001V11V11C11 10.4477 11.4477 10 12 10Z"
                      ></path>{" "}
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="sm:hidden my-4 border-gray-200 sm:mx-auto dark:border-gray-700" />

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <Link
                    onClick={() => setState(6)}
                    href="form"
                    className="hover:underline"
                  >
                    UDCPR Index
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    onClick={() => setState(5)}
                    href="form"
                    className="hover:underline"
                  >
                    Appendix
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    onClick={() => setState(2)}
                    href="form"
                    className="hover:underline"
                  >
                    Potential FSI
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    onClick={() => setState(3)}
                    href="form"
                    className="hover:underline"
                  >
                    Parking
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    onClick={() => setState(4)}
                    href="form"
                    className="hover:underline"
                  >
                    Building Margin
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setState(1)}
                    href="form"
                    className="hover:underline"
                  >
                    Create Performa-I
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <Link href="privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="terms" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="shipping" className="hover:underline">
                    Shipping and delivery
                  </Link>
                </li>
                <li>
                  <Link href="refund" className="hover:underline">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-1">
                  College Rd, D'souza <br />
                  Colony, Nashik.
                </li>
                <li className="mb-1">
                  <Link
                    href="mailto:cavesinfotech@gmail.com"
                    legacyBehavior
                    className="hover:underline "
                  >
                    udcprsimplified@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+919209905101" className="hover:underline">
                    +91 9209905101
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className=" my-4 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <div className="sm:flex space-y-2 sm:space-y-0 text-center justify-between">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="/" className="hover:underline mr-1">
              UDCPRsimplified™
            </Link>
            | All Rights Reserved
          </span>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <Link
              href="https://portfolio-nil71274.vercel.app"
              legacyBehavior
              className="hover:underline"
            >
              Designed and developed by - Caves Infotech
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
