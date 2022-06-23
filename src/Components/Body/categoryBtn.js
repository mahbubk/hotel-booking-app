import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class CategoryButton extends Component {
    render() {
        return (
            <Dropdown
                isOpen
                toggle={function noRefCheck() { }}
            >
                <DropdownToggle caret>
                    Category
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem tag={Link} to="/single">
                        Single Royal Room
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/double">
                        Double Deluxe Room
                    </DropdownItem>
                    <DropdownItem tag={Link} to='/master'>
                        Premium Quadruple Room
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default CategoryButton;