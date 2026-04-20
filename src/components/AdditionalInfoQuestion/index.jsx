import React from "react";
import { Flex, Space, Table, Tag } from "antd";

export default function AdditionalInfoQuestion({ additionalInfo }) {
  if (additionalInfo.type === "table") {
    const columns = additionalInfo.data.map((item, i) => ({
      title: item.key,
      dataIndex: item.key,
      key: item.key || i,
    }));
    const data = additionalInfo.data.reduce(
      (acc, item) => ({ ...acc, [item.key]: item.value }),
      {},
    );

    return <Table columns={columns} dataSource={[data]} pagination={false} />;
  }

  return <></>;
}
