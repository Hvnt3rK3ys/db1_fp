import React from "react";
import styles from "../../styles/E_dynamic.module.scss";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner, Button } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

const E_Cliente = () => {
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  let list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setPage((prev) => prev + 1);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", { signal });
      let json = await res.json();

      if (!cursor) {
        setIsLoading(false);
      }

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const hasMore = page < 9;
  return (
    <section className={styles.globalContainer}>
      <h1>E_Cliente</h1>

      <Table
        className={styles.globalTable}
        isHeaderSticky
        aria-label="Example table with client side sorting"
        classNames={{
          base: "max-h-[520px] overflow-y-scroll overflow-x-hidden", // Disable horizontal scroll
          table: "min-h-[420px]",
        }}
      >
        <TableHeader>
          <TableColumn key="name" className={styles.tableHeader}>Name</TableColumn>
          <TableColumn key="height" className={styles.tableHeader}>Height</TableColumn>
          <TableColumn key="mass" className={styles.tableHeader}>Mass</TableColumn>
          <TableColumn key="birth_year" className={styles.tableHeader}>Birth year</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={list.items}
          loadingContent={<Spinner label="Loading..." />}
        >
          {(item) => (
            <TableRow key={item.name}>
              {(columnKey) => <TableCell className={styles.tableCell}>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {hasMore && !isLoading && (
        <div className={styles.pagination}>
          <Button isDisabled={list.isLoading} variant="flat" onPress={list.loadMore}>
            {list.isLoading && <Spinner color="white" size="sm" />}
            Load More
          </Button>
        </div>
      )}
    </section>
  );
};

export default E_Cliente;