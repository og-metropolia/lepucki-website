export function insertRecord(conn, response, tableName, fieldNames, fieldValues) {
  try {
    const placeholders = Array.from(
      { length: fieldValues.length },
      () => '?'
    ).join(', ');
    conn.query(
      `INSERT INTO ${tableName} (${fieldNames}) VALUES (${placeholders})`,
      fieldValues,
      (err) => {
        if (err) {
          console.log('Error while inserting a record into the database', err);
          return response.status(400).send();
        }
        return response
          .status(200)
          .json({ message: 'Record created successfully!' });
      }
    );
  } catch (err) {
    console.log(err);
    return response.status(500).send();
  }
}

export function deleteRecord(conn, response, tableName, id) {
  try {
    conn.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err) => {
      if (err) {
        console.log('Error while deleting a record from the database', err);
        return response.status(400).send();
      }
      return response
        .status(200)
        .json({ message: 'Record deleted successfully!' });
    });
  } catch (err) {
    console.log(err);
    return response.status(500).send();
  }
}
