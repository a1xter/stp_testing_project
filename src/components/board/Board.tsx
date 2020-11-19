import React, { useEffect } from "react";
import UserRow from "./UserRow";
import {Store, StoreContext} from "../../configuration/store";
import { IUser } from "../../configuration/types";
import { observer } from "mobx-react"
import ReactPaginate from 'react-paginate';
import { formatDistance } from 'date-fns'
import { ru } from 'date-fns/locale'
import * as sc from "./extra/styles"

interface Props {
    history: any;
    pageID: number;
}

const Board: React.FC<Props> = observer((props) => {
    const store: Store = React.useContext(StoreContext);

    useEffect(() => {
        store.getUsers();
    }, [])

    const setSelected = (id: number | null) => {
        store.selectedID = id
    }

    const getUsersPosts = (id: number) => {
        props.history.push(`${id}/posts`);
    }

    return (
        <sc.Section>
            {store.users.map((item: IUser) => {
                return (
                    <UserRow isSelected={item.id === store.selectedID}
                             setSelected={setSelected}
                             getPosts={getUsersPosts}
                             key={item.id}
                             id={item.id}
                             name={item.name}
                             email={item.email}
                             gender={item.gender}
                             status={item.status}
                             created_at={
                                 formatDistance(new Date(item.created_at), new Date(),{ locale: ru })
                             }
                             updated_at={
                                 formatDistance(new Date(item.created_at), new Date(), { locale: ru })
                             }/>
                )
            })}
            <sc.StyledPaginateContainer>
                <ReactPaginate
                    previousLabel={'Предыдущая страница'}
                    nextLabel={"Следующая страница"}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={store.usersPage.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={store.setNewPage}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </sc.StyledPaginateContainer>
        </sc.Section>
    )
});

export default Board;