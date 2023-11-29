

export const InitWrite = (): void => {
    onNet("np-books:createBook", async (pSource: number, title: string, pages, icon) => {
        // const query = "INSERT INTO nopicks_books (title, pages, icon) VALUES (?, ?, ?)";
        // const sql = await SQL.execute(query, title, pages, icon);
        
        // if (sql.affectedRows) {
        //     return true;
        // }

        console.log(`pSource: ${pSource}\nTitle: ${title}\nPages: ${pages}\nIcon: ${icon}`);
        return;
    });
};