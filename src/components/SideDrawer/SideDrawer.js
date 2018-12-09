import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (
    {
        open,
        onClose
    }
) => {
    return (
        <Drawer
        anchor={'right'}
        open={open}
        onClose={() => onClose(false)}
        >
            <List>
                <ListItem button>
                Event Starts in
                </ListItem>
                <ListItem button>
                  Meeting InFo
                </ListItem>
                <ListItem button>
                    Highlights
                </ListItem>
                <ListItem button>
                    Speakers
                </ListItem>
                <ListItem button>
                    Location
                </ListItem>
            </List>

        </Drawer>
    );
};

export default SideDrawer;