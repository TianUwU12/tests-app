import React from "react";
import { Flex, Space, Table, Tag } from "antd";

export default function AdditionalInfoQuestion({ additionalInfo }) {
  if (additionalInfo.type === "table") {
    const columns = additionalInfo.data.map((item) => ({
      title: item.key,
      dataIndex: item.key,
      key: item.key,
    }));
    const data = additionalInfo.data.reduce(
      (acc, item) => ({ ...acc, [item.key]: item.value }),
      {}
    );

    return <Table columns={columns} dataSource={[data]} pagination={false} />;
  }

  return <></>;
}

const arr = [1, 2, 3];
const sum = arr.reduce((acc, item) => acc + item, 0);
