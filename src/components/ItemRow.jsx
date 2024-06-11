import React from 'react';
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";

const ItemRow = (props) => {
    const onDelEvent = () => {
      props.onDelEvent(props.item.id);
    };
    return (
      <tr>
        <td style={{ width: "100%" }}>
          <EditableField
            onItemizedItemEdit={(evt) =>
              props.onItemizedItemEdit(evt, props.item.id)
            }
            cellData={{
              type: "text",
              name: "name",
              placeholder: "Item name",
              value: props.item.name,
              id: props.item.id,
            }}
          />
          <EditableField
            onItemizedItemEdit={(evt) =>
              props.onItemizedItemEdit(evt, props.item.id)
            }
            cellData={{
              type: "text",
              name: "description",
              placeholder: "Item description",
              value: props.item.description,
              id: props.item.id,
            }}
          />
        </td>
        <td style={{ minWidth: "70px" }}>
          <EditableField
            onItemizedItemEdit={(evt) =>
              props.onItemizedItemEdit(evt, props.item.id)
            }
            cellData={{
              type: "number",
              name: "quantity",
              min: 1,
              step: "1",
              value: props.item.quantity,
              id: props.item.id,
            }}
          />
        </td>
        <td style={{ minWidth: "130px" }}>
          <EditableField
            onItemizedItemEdit={(evt) =>
              props.onItemizedItemEdit(evt, props.item.id)
            }
            cellData={{
              leading: props.currency,
              type: "number",
              name: "rate",
              min: 1,
              step: "0.01",
              presicion: 2,
              textAlign: "text-end",
              value: props.item.rate,
              id: props.item.id,
            }}
          />
        </td>
        <td className="text-center" style={{ minWidth: "50px" }}>
          <BiTrash
            onClick={onDelEvent}
            style={{ height: "33px", width: "33px", padding: "7.5px" }}
            className="text-white mt-1 btn btn-danger"
          />
        </td>
      </tr>
    );
  };

export default ItemRow