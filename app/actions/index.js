import { browserHistory } from 'react-router';


export default function rotatePage(page, maxPage){
  if (maxPage == 1)
    return;

  if (page == maxPage)
    browserHistory.push('?page=1');
  else
    browserHistory.push(`?page=${page + 1}`);
}