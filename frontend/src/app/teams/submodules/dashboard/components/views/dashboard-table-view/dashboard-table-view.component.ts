import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-table-view',
  templateUrl: './dashboard-table-view.component.html',
  styleUrls: ['./dashboard-table-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardTableViewComponent {
  @Input() members: any[] = [];

  displayedColumns: string[] = [
    'name',
    'position',
    'email',
    'entryDate',
    'performance',
    'actions',
  ];

  onMoreClick(event: Event) {
    event.stopPropagation();
  }

  getPerformanceColor(performance: number) {
    if (performance <= 100 && performance >= 70) {
      return '#6d9f33';
    } else if (performance < 70 && performance >= 40) {
      return '#f4a40f';
    } else {
      return '#ef6a6b';
    }
  }
}
