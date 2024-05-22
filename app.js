import express from "express";
async function start() {
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Running on port ${port}`);
    });
}

start();

export default app;