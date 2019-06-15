import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import { ApplicationState } from "../../store"
import * as RepositoriesActions from "../../store/ducks/repositories/actions"
import { Repository } from "../../store/ducks/repositories/types"
import RepositoryItem from "../RepositoryItem"

// map info that comes in mapStateToProps
interface StateProps {
  repositories: Repository[]
}

// map info that comes from mapDispatchToProps
interface DispatchProps {
  loadRequest(): void
}

// maps every other prop that comes from the parent components
interface OwnProps {}

// marge the 3 interfaces in one type the getters all types of props
type Props = StateProps & DispatchProps & OwnProps

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props
    loadRequest()
  }

  render() {
    const { repositories } = this.props

    return (
      <>
        <h2>Repositories From Pedro Frohmut</h2>
        <ul>
          {repositories.map(repository => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList)
