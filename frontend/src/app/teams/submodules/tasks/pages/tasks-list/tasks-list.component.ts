import { Observable, of } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TaskStatus, TaskPriority } from '../../models/tasks.model';

@Component({
  selector: 'app-tasks-list-page',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent implements OnInit {
  columns$: Observable<TaskStatus[]> = of([]);
  filter: any = {};

  ngOnInit() {
    this.columns$ = of([
      {
        id: 1,
        name: 'Assigned',
        color: '#FF5733',
        tasks: [
          {
            id: 1,
            title: 'Develop Feature A',
            startDate: '2023-10-15',
            endDate: '2023-10-30',
            description: 'Implement new feature A for the project',
            executorName: 'John Doe',
            priority: TaskPriority.CRITICAL,
            tags: ['Development'],
            status: 'Assigned',
          },
          {
            id: 2,
            title: 'Design UI for App',
            startDate: '2023-10-16',
            endDate: '2023-11-05',
            description: 'Create user interface design for the application',
            executorName: 'Alice Smith',
            priority: TaskPriority.LOW,
            tags: ['UX/UI'],
            status: 'Assigned',
          },
        ],
      },
      {
        id: 2,
        name: 'Testing',
        color: '#3DFF33',
        tasks: [
          {
            id: 3,
            title: 'Test New Feature',
            startDate: '2023-10-20',
            endDate: '2023-11-05',
            description:
              'Perform testing and quality assurance for the new feature',
            executorName: 'Bob Johnson',
            priority: TaskPriority.MEDIUM,
            tags: ['Testing'],
            status: 'Testing',
          },
        ],
      },
      {
        id: 3,
        name: 'Done',
        color: '#AA33FF',
        tasks: [
          {
            id: 4,
            title: 'Code Review',
            startDate: '2023-10-25',
            endDate: '2023-11-10',
            description: 'Review and provide feedback on the code changes',
            executorName: 'Emily Brown',
            priority: TaskPriority.HIGH,
            tags: ['Development'],
            status: 'Done',
          },
        ],
      },
    ]);
  }

  onFilter(event: any) {
    this.filter = event;
  }
}
