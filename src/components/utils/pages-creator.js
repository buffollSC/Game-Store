export function CreatePages(pages, pagesCount, selectPage) {
    if(pagesCount > 10) {
        if(selectPage > 5) {
            for(let i = selectPage-4; i <= selectPage+5; i++) {
                pages.push(i)
                if(i==pagesCount) break
            }
        } else {
            for(let i = 1; i <= 10; i++) {
                pages.push(i)
                if(i==pagesCount) break
            }
        }
    } else {
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}