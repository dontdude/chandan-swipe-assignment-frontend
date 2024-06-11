import { useSelector } from "react-redux";
import { selectInvoiceList } from "./invoicesSlice";
import { selectProductList } from "./productsSlice";

const invoiceItemsFromProducts = (invoice, productsList) => {
  const newInvoice = Object.fromEntries(invoice.items.map(({ id, quantity }) => [id, quantity]));

  const productsForInvoice = productsList
    .filter(({ id }) => id in newInvoice)
    .map((product) => ({
      ...product,
      quantity: newInvoice[product.id],
    }));

  return { ...invoice, items: productsForInvoice };
};

export const useInvoiceListData = () => {
  const invoices = useSelector(selectInvoiceList);
  const productsList = useSelector(selectProductList);
  const invoiceList = invoices.map((invoice) =>
    invoiceItemsFromProducts(invoice, productsList)
  );

  const getOneInvoice = (receivedId) => {
    const invoice = invoiceList.find(
      (invoice) => invoice.id.toString() === receivedId.toString()
    ) || null;

    return invoice ? invoiceItemsFromProducts(invoice, productsList) : null;
  };

  return {
    invoiceList,
    getOneInvoice,
    listSize: invoiceList.length,
  };
};

export const useProductsListData = () => {
  const productsList = useSelector(selectProductList);

  return {
    productsList,
  };
};
