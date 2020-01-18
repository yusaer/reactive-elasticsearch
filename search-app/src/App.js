import React, { Component } from 'react';
import { ReactiveBase, DataSearch, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="main-container">
                <ReactiveBase
                    app="search-app"
                    url="http://localhost:9200"
                >
                    <DataSearch
                        componentId="title"
                        dataField={["ResponseName"]}
                        queryFormat="and"
                    />
                    <SelectedFilters />
                    <ReactiveList
                        componentId="resultLists"
                        dataField="ResponseName"
                        pagination={true}
                        pages={10}
                        renderItem={
                            res => <div>{res.ResponseName}</div>
                        }
                        react={{
                            and: ["title"]
                        }}
                    />
                </ReactiveBase>
            </div>
        );
    }
}

export default App;
