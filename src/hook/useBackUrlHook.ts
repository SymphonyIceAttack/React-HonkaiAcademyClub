import { useSelector } from "react-redux";
import { useBackedUrl } from "@/store";

export default (): [string] => {
    const BackUrl = useSelector(useBackedUrl());
    return [BackUrl];
};
