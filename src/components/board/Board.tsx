import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import { StoreContext } from "../../configuration/store";
import { IStore, IUser } from "../../configuration/types";
import { useObserver } from "mobx-react";
import ApiService from "../../remote/api-service";
import ReactPaginate from 'react-paginate';
import { formatDistance } from 'date-fns'
import { ru } from 'date-fns/locale'
import * as sc from "./extra/styles"

interface Props {
    history: any;
    pageID: number;
}

const Board: React.FC<Props> = (props) => {
    const api = new ApiService();
    const store: IStore = React.useContext(StoreContext);
    //todo -> get pageCount from server
    const [state] = useState({
        pageCount: 67
    });

    useEffect(() => {
        api.getAllUsers(1).then((users) => {
            store.users = users;
        })
    }, [])

    const setSelected = (id: number | null) => {
        store.selectedID = id
    }

    const getUsersPosts = (id: number) => {
        props.history.push(`${id}/posts`);
    }

    const getNewPage = (data: any) => {
        const id = data.selected + 1;
        api.getAllUsers(id).then((users) => {
            store.users = users;
        })
    }

    return useObserver(() => (
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
                        pageCount={state.pageCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={getNewPage}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </sc.StyledPaginateContainer>
            </sc.Section>
    ))
}

export default Board;