import { EntityRepository, Repository } from 'typeorm'
import { Conversation } from '../entities/Conversation'

@EntityRepository(Conversation)
class ConversationRepository extends Repository<Conversation> {}

export { ConversationRepository }
