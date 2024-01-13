// rrd imports
import { Form, NavLink } from "react-router-dom"

// library
import { TrashIcon } from '@heroicons/react/24/solid'

// assets
import logomark from "../assets/logomark.svg"
import logo from "../assets/logo.svg"

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink
        to="/Coin-Tracker/"
        aria-label="Go to home"
      >
        <img className="logo" src={logo} alt="" height={30} />
        <span>CoinTrack</span>
      </NavLink>
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span>Delete User</span>
              <TrashIcon width={20} />
            </button>

          </Form>
        )
      }
    </nav>
  )
}
export default Nav