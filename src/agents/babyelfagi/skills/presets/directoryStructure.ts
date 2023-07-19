import { AgentTask } from '@/types';
import { Skill } from '../skill';

export class DirectoryStructure extends Skill {
  static skillName = 'directory_structure';
  static skillDescription =
    "A skill that outputs the directory structure of the 'src' folder.";
  static skillIcon = '📂';
  static skillType = 'dev';

  async execute(
    task: AgentTask,
    dependentTaskOutputs: any,
    objective: string,
  ): Promise<any> {
    const response = await fetch('/api/local/directory-structure', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to get directory structure');
    }
    return await response.json();
  }
}
