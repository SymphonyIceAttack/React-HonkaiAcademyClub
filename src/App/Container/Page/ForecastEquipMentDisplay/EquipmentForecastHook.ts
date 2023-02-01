import React, { useEffect, useState } from "react";
import GetLocalAccount from "@/utils/GetLocalAccount";
import GetHeaderToken from "@/utils/GetHeaderToken";
import useBackUrlHook from "@/hook/useBackUrlHook";
import type { EquipmentItemType } from "./index";
export default () => {
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const [EquipmentForecast, setEquipmentForecast] = useState<
        EquipmentItemType[]
    >([]);
    useEffect(() => {
        fetch(`${BackUrl}/EquipmentForecast?account=${account}`, {
            method: "Get",
            headers: GetHeaderToken(),
        })
            .then((res) => res.json())
            .then(
                (res: {
                    ALLForecastList: EquipmentItemType[];
                    status: number;
                }) => setEquipmentForecast(res.ALLForecastList)
            );
    }, []);
    return [EquipmentForecast];
};
