
import MainCarousel from "../../components/MainCarousel";
import FormTestConstructor from "../../components/FormTestConstructor";
import { useDispatch, useSelector } from "react-redux";
import { increment, addNum } from "../../store/slices/counterSlice";

export default function HomePage() {
  

  return (
    <div>
      
      <MainCarousel />
      <FormTestConstructor />
    </div>
  );
}


