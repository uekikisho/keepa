"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const columns = [
  {
    key: "topic",
    label: "Topic",
  },
  {
    key: "viewer",
    label: "",
  },
  {
    key: "replies",
    label: "Replies",
  },
  {
    key: "views",
    label: "Views",
  },
  {
    key: "activity",
    label: "Activity",
  },
];
interface IProps {
  rows: Array<{
    key: string;
    topic: string;
    viewer: string;
    replies: string;
    views: string;
    activity: string;
  }>;
}

const DTable: React.FC<IProps> = ({ rows }) => {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DTable;
