import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


const Tree = () => {

    const onExpand = (event, val) => {

    }

    return (
        <div>
            tree

            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                onNodeSelect={onExpand}
            >
                <TreeItem nodeId="1" label="Applications">
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                </TreeItem>

            </TreeView>
        </div>
    );
}

export default Tree;
